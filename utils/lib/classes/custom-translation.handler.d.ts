import { MissingTranslationHandler, MissingTranslationHandlerParams } from '@ngx-translate/core';
import { Observable } from 'rxjs';
export declare class CustomTranslationHandler implements MissingTranslationHandler {
    handle(params: MissingTranslationHandlerParams): string | Observable<string>;
}
