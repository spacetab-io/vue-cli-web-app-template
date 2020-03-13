import { ServiceResponse } from '@/services/types';
import { Transformer } from '@/transformers/transformer';

export abstract class BaseService {

  protected async request<S, ST, F, FT>(
    method: Function,
    data: S,
    transformer: Transformer<S, ST, F, FT>,
  ): Promise<ServiceResponse<F, FT>> {
    // eslint-disable-next-line prefer-spread
    const response: F = await method.apply(null, transformer.send(data));

    return {
      original: response,
      transformed: transformer.fetch(response),
    };
  }
}
