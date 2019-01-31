import { LoggablePipe } from './loggable.pipe';

describe('LoggablePipe', () => {
  it('create an instance', () => {
    const pipe = new LoggablePipe();
    expect(pipe).toBeTruthy();
  });
});
