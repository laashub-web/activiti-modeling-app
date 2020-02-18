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
import { CanActivate, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { AmaState } from '@alfresco-dbp/modeling/ama-sdk';
import { Store } from '@ngrx/store';
import { LoggedInAction } from '../../store/actions/app.actions';

@Injectable()
export class AmaLocalStorageMergeGuard implements CanActivate {
    constructor(
        protected router: Router,
        protected store: Store<AmaState>
    ) {}

    canActivate():  Observable<boolean> {
        this.store.dispatch(new LoggedInAction());
        return of(true);
    }
}
