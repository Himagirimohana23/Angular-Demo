import { CurrencyWithScalePipe } from './currency-with-scale-pipe';

describe('CurrencyWithScalePipe', () => {
  it('create an instance', () => {
    const pipe = new CurrencyWithScalePipe();
    expect(pipe).toBeTruthy();
  });
});
