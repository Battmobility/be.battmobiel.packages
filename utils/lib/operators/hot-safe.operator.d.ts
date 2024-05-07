import { MonoTypeOperatorFunction } from 'rxjs';
/**
 * Share source and replay specified number of emissions on subscription.
 *
 * This operator connects to a source observable and multicasts through
 * a `ReplaySubject` constructed with the specified arguments.
 * When there are no subscribers (refCount = 0) left the source stream will complete.
 *
 * ## Why use hotSafe?
 * You generally want to use `hotSafe` when you have
 * computations (ex. http calls, calculations, algorithms, ...)
 * that you do not wish to be executed amongst multiple subscribers.
 * It may also be valuable in situations where you know you will have late subscribers to
 * a stream that need access to previously emitted values.
 *
 * @param [bufferSize=Number.POSITIVE_INFINITY] Maximum element count of the replay buffer.
 */
export declare function hotSafe<T>(bufferSize?: number): MonoTypeOperatorFunction<T>;
