# Deploy to Cloudflare Workers

Production deploys run automatically on every push to `main` via [`.github/workflows/deploy.yml`](workflows/deploy.yml).

## GitHub Actions secrets (one-time setup)

Add these under **Settings → Secrets and variables → Actions → New repository secret**:

| Secret | Value |
|--------|-------|
| `CLOUDFLARE_API_TOKEN` | API token from [Cloudflare API tokens](https://dash.cloudflare.com/profile/api-tokens) |
| `CLOUDFLARE_ACCOUNT_ID` | `eb106a5b659faf47d88b35997c4dbb59` |

### Recommended API token permissions

Start from the **Edit Cloudflare Workers** template, then ensure:

- Account → Workers Scripts → Edit
- Account → Workers Routes → Edit
- Account → Account Settings → Read
- Zone → Zone → Read (for `legalprimebd.com`, if the zone is on this account)

## Manual deploy (local)

```bash
bunx wrangler login   # one-time
bun run deploy
```

## Live URLs

- https://legalprimebd.com
- https://www.legalprimebd.com

Worker name: `legal-prime` (see [`wrangler.jsonc`](../wrangler.jsonc)).
