/*!
 * @license
 * Copyright 2019 Alfresco, Inc. and/or its affiliates.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *       http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { Store } from '@ngrx/store';
import { AmaState, OpenFilterAction, CONNECTOR } from '@alfresco-dbp/modeling/ama-sdk';
import { ShowConnectorsAction } from '../../store/connector-editor.actions';

@Injectable()
export class ConnectorsLoaderGuard implements CanActivate {
    constructor(private store: Store<AmaState>) {}

    canActivate(route: ActivatedRouteSnapshot): Observable<boolean> {
        const projectId = route.params.projectId;
        this.store.dispatch(new ShowConnectorsAction(projectId));
        this.store.dispatch(new OpenFilterAction(CONNECTOR));

        return of(true);
    }
}
