import 'rxjs/add/operator/toPromise';

import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import { AddProject } from '../shared/models/add-project.model';
import { Project } from '../shared/models/project.model';

@Injectable()
export class ProjectService {
    private headers = new Headers({ 'Content-Type': 'application/json' });

    constructor(private http: Http) { }

    saveProject(item: AddProject): Promise<void> {
        const url = `/api/project`;

        let project = new AddProject();
        project = item; // Simple assignment, will probably handle values differently later

        return this.http
            .post(url, JSON.stringify(project), { headers: this.headers })
            .toPromise()
            .then(() => { console.log('success'); })
            .catch((error) => console.error(error));
    }

    getProjects(): Promise<Array<Project>> {
        return this.http
            .get('/api/project', { headers: this.headers })
            .toPromise()
            .then((result) => { return result.json(); })
            .catch((error) => console.error(error));
    }
}