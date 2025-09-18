import fs from 'fs';
import path from 'path';
import yaml from 'yaml';
import { SiteData } from '@/types/site';

export function loadSiteData(): SiteData {
    const contentPath = path.join(process.cwd(), 'src', 'content', 'site.yaml');
    const fileContents = fs.readFileSync(contentPath, 'utf8');
    return yaml.parse(fileContents) as SiteData;
}