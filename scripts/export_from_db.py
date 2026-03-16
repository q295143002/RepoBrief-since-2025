#!/usr/bin/env python3
"""
Export github_repos.db to repos/*.md, _data/repos.json, and root index.md.
Usage: python3 scripts/export_from_db.py [--db PATH]
"""
import argparse
import json
import os
import re
import sqlite3
import sys


def get_project_root() -> str:
    script_dir = os.path.dirname(os.path.abspath(__file__))
    return os.path.dirname(script_dir)


def make_base_slug(repo_name: str, id_: int) -> str:
    """Build URL-safe slug from repo_name (e.g. owner/name -> owner-name)."""
    if not repo_name or not isinstance(repo_name, str):
        return f"repo-{id_}"
    s = repo_name.lower().strip()
    s = s.replace("/", "-").replace(" ", "-").replace("_", "-")
    s = re.sub(r"[^a-z0-9-]", "", s)
    s = re.sub(r"-+", "-", s).strip("-")
    return s or f"repo-{id_}"


def assign_slugs(rows: list[dict]) -> None:
    """Set 'slug' on each row, resolving collisions with _<id>."""
    seen: set[str] = set()
    for r in rows:
        base = make_base_slug(r.get("repo_name") or "", r.get("id") or 0)
        slug = base
        if slug in seen:
            slug = f"{base}_{r.get('id', 0)}"
        seen.add(slug)
        r["slug"] = slug


def _yaml_quote(s: str) -> str:
    """Quote string for YAML if it contains : or \" or newline."""
    if s is None:
        return '""'
    s = str(s)
    if ":" in s or '"' in s or "\n" in s:
        s = s.replace("\\", "\\\\").replace('"', '\\"').replace("\n", "\\n")
        return f'"{s}"'
    return f'"{s}"'


def _tags_list(tags_str) -> list[str]:
    """Parse DB tags column (comma-separated) into list of strings."""
    if not tags_str or not str(tags_str).strip():
        return []
    return [t.strip() for t in str(tags_str).split(",") if t.strip()]


def _summary(r: dict) -> str:
    """English summary: english_summary or original_description or fallback."""
    s = (r.get("english_summary") or r.get("original_description") or "").strip()
    return s or "—"


def build_repo_md(r: dict) -> str:
    """Build full Markdown content for one repo (frontmatter + body)."""
    title = (r.get("repo_name") or "").strip() or "—"
    url = (r.get("url") or "").strip() or ""
    stars = r.get("stars")
    language = (r.get("language") or "").strip() or ""
    tags = _tags_list(r.get("tags"))
    summary = _summary(r)
    problems = (r.get("problems_solved") or "").strip() or "—"
    how_to = (r.get("how_to_use") or "").strip() or "—"

    lines = [
        "---",
        f"title: {_yaml_quote(title)}",
        f"repo_name: {_yaml_quote(title)}",
        f"url: {_yaml_quote(url)}",
        f"github_url: {_yaml_quote(url)}",
        f"stars: {stars if stars is not None else 0}",
        f"language: {_yaml_quote(language)}",
        "layout: repo",
    ]
    if tags:
        lines.append("tags:")
        for t in tags:
            lines.append(f"  - {_yaml_quote(t)}")
    else:
        lines.append("tags: []")
    lines.append("---")
    lines.append("")
    lines.append("## What it is")
    lines.append("")
    lines.append(summary)
    lines.append("")
    lines.append("## Problems solved")
    lines.append("")
    lines.append(problems)
    lines.append("")
    lines.append("## How to get started")
    lines.append("")
    lines.append(how_to)
    lines.append("")
    return "\n".join(lines)


def build_data_entry(r: dict) -> dict:
    """Build one entry for _data/repos.json."""
    return {
        "id": r.get("id"),
        "repo_name": r.get("repo_name") or "",
        "url": r.get("url") or "",
        "stars": r.get("stars") or 0,
        "language": (r.get("language") or "").strip() or "",
        "slug": r.get("slug", ""),
        "title": r.get("repo_name") or "",
        "summary": _summary(r),
        "problems_solved": (r.get("problems_solved") or "").strip() or "",
        "how_to_use": (r.get("how_to_use") or "").strip() or "",
        "tags": _tags_list(r.get("tags")),
    }


def write_repos_and_data(root: str, rows: list[dict]) -> None:
    """Write repos/*.md and _data/repos.json."""
    repos_dir = os.path.join(root, "repos")
    data_dir = os.path.join(root, "_data")
    os.makedirs(repos_dir, exist_ok=True)
    os.makedirs(data_dir, exist_ok=True)

    for r in rows:
        slug = r.get("slug", "")
        path = os.path.join(repos_dir, f"{slug}.md")
        with open(path, "w", encoding="utf-8") as f:
            f.write(build_repo_md(r))

    data = [build_data_entry(r) for r in rows]
    data_path = os.path.join(data_dir, "repos.json")
    with open(data_path, "w", encoding="utf-8") as f:
        json.dump(data, f, ensure_ascii=False, indent=2)

    print(f"Wrote {len(rows)} files to repos/ and _data/repos.json")


def write_index_md(root: str, rows: list[dict]) -> None:
    """Write root index.md: frontmatter + list of repos sorted by stars desc."""
    data = [build_data_entry(r) for r in rows]
    data.sort(key=lambda r: (r.get("stars") or 0), reverse=True)

    lines = [
        "---",
        "title: \"2025 GitHub Trends — All Repositories\"",
        "layout: default",
        "---",
        "",
        "# All repositories (by stars)",
        "",
    ]
    for r in data:
        slug = r.get("slug", "")
        repo_name = r.get("repo_name", "")
        stars = r.get("stars") or 0
        lang = (r.get("language") or "").strip() or "—"
        summary = (r.get("summary") or "").strip()
        if len(summary) > 80:
            summary = summary[:77] + "..."
        if not summary:
            summary = "—"
        lines.append(f"- [{repo_name}](repos/{slug}.md) · ⭐ {stars} · {lang} · {summary}")
        lines.append("")

    path = os.path.join(root, "index.md")
    with open(path, "w", encoding="utf-8") as f:
        f.write("\n".join(lines))
    print(f"Wrote {path}")


def main() -> None:
    parser = argparse.ArgumentParser(description="Export repos from github_repos.db")
    parser.add_argument(
        "--db",
        default=None,
        help="Path to github_repos.db (default: <project_root>/github_repos.db)",
    )
    args = parser.parse_args()
    root = get_project_root()
    db_path = args.db or os.path.join(root, "github_repos.db")

    if not os.path.isfile(db_path):
        print(f"Error: database not found: {db_path}", file=sys.stderr)
        sys.exit(1)

    try:
        conn = sqlite3.connect(db_path)
        conn.row_factory = sqlite3.Row
        cur = conn.cursor()
        cur.execute("SELECT * FROM repositories")
        rows = [dict(r) for r in cur.fetchall()]
        conn.close()
    except sqlite3.Error as e:
        print(f"Error: cannot read database: {e}", file=sys.stderr)
        sys.exit(1)

    assign_slugs(rows)
    print(f"Loaded {len(rows)} repositories")
    write_repos_and_data(root, rows)
    write_index_md(root, rows)


if __name__ == "__main__":
    main()
