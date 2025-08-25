import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ImagePathService {

  /**
   * Get the correct asset path for images based on deployment environment
   * @param imagePath - relative path to image (e.g., 'image/icons/icon.svg')
   */
  getImagePath(imagePath: string): string {
    // Remove any leading slashes or asset references
    const cleanPath = imagePath.replace(/^(\.\.\/)*assets\//, '').replace(/^\/+/, '');
    
    // Check if we're on GitHub Pages
    const isGitHubPages = window.location.hostname === 'boorchi.github.io';
    
    if (isGitHubPages) {
      // GitHub Pages subdirectory path
      const repoName = 'https-github.com-boorchitsogtsaikhan-mongolia-budget-transparency.git-';
      return `/${repoName}/assets/${cleanPath}`;
    } else {
      // Local development or other hosting
      return `/assets/${cleanPath}`;
    }
  }

  /**
   * Get base path for the application
   */
  getBasePath(): string {
    const isGitHubPages = window.location.hostname === 'boorchi.github.io';
    return isGitHubPages 
      ? '/https-github.com-boorchitsogtsaikhan-mongolia-budget-transparency.git-/' 
      : '/';
  }
}
