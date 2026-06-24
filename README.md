# Personal Website

This is my personal website built with Jekyll and the Minimal Mistakes theme. It serves as a portfolio and blog to showcase my work and thoughts.

## Features

- **Project hubs** (`_projects/`) — permanent portfolio pages with taxonomy metadata (domain, stage, status)
- **Progress dashboard** (`/progress/`) — Kanban-style view of goals, work in progress, and completed items
- **Project timelines** — progress notes linked to project hubs via `project_id`
- **Writing sections** — blog, learning, explainers, challenges, ideas, reading notes, and project journals (each filtered by category)
- **Domain browsing** — project collections filtered by domain (data science, geospatial, MLOps, etc.)
- **Search** — Lunr-powered full-site search
- **Templates** (`_templates/`) — starter files for each note type (see `/post-guide/`)

## Local Development

1. Install Ruby and Jekyll
2. Clone this repository
3. Run `bundle install`
4. Run `bundle exec jekyll serve`
5. Visit `http://localhost:4000`

## License

This site is built with the Minimal Mistakes Jekyll theme, which is licensed under the MIT License.
