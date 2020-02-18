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

import { ModelUploader, MODEL_UPLOADERS, PROCESS } from '@alfresco-dbp/modeling/ama-sdk';
import { UploadProcessAttemptAction } from '../store/process-editor.actions';

export function createProcessUploader(): ModelUploader {
    return {
        type: PROCESS,
        acceptedFileType: '.xml',
        action: UploadProcessAttemptAction
    };
}

export function getProcessUploaderProvider() {
    return [
        {
            provide: MODEL_UPLOADERS,
            useFactory: createProcessUploader,
            multi: true
        }
    ];
}
