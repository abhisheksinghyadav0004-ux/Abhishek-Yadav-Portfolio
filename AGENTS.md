<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

## Project rules

- All portfolio content (profile, projects, certifications, job simulations, TryHackMe rooms, skills, links) lives in `src/data/portfolio.ts`; section components read from it so content edits never touch JSX.
- Page sections live in `src/components/portfolio/` and are composed in `src/routes/index.tsx` as a single-page site with hash anchors.
- Portfolio-wide visual treatments are scoped through semantic tokens and portfolio classes in `src/styles.css`; keep shared error and UI screens independent of section-specific styling.
