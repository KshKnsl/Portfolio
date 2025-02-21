export interface GitHubUser {
  login: string;
  name: string;
  avatar_url: string;
  bio: string;
  company: string | null;
  blog: string;
  location: string;
  email: string | null;
  hireable: boolean | null;
  public_repos: number;
  followers: number;
  following: number;
}

export interface GitHubRepo {
  id: number;
  name: string;
  description: string;
  html_url: string;
  homepage: string | null;
  stargazers_count: number;
  language: string;
  topics: string[];
}

export async function getGitHubUser(username: string): Promise<GitHubUser> {
  const response = await fetch(`https://api.github.com/users/${username}`);
  if (!response.ok) {
    throw new Error('Failed to fetch GitHub user');
  }
  return response.json();
}

export async function getGitHubRepos(username: string): Promise<GitHubRepo[]> {
  const response = await fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=6`);
  if (!response.ok) {
    throw new Error('Failed to fetch GitHub repositories');
  }
  return response.json();
}