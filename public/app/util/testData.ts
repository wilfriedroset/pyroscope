import { Profile } from '@phlare/legacy/models';

export const SimpleSingle: Profile = {
  version: 1,
  flamebearer: {
    names: [
      'total',
      'runtime.main',
      'main.main',
      'github.com/pyroscope-io/client/pyroscope.TagWrapper',
      'runtime/pprof.Do',
      'github.com/pyroscope-io/client/pyroscope.TagWrapper.func1',
      'main.main.func1',
      'main.slowFunction',
      'main.slowFunction.func1',
      'main.work',
      'main.fastFunction',
      'main.fastFunction.func1',
    ],
    levels: [
      [0, 95, 0, 0],
      [0, 95, 0, 1],
      [0, 95, 0, 2],
      [0, 95, 0, 3],
      [0, 95, 0, 4],
      [0, 95, 0, 5],
      [0, 95, 0, 6],
      [0, 19, 0, 10, 0, 76, 0, 7],
      [0, 19, 0, 3, 0, 76, 0, 4],
      [0, 19, 0, 4, 0, 76, 0, 8],
      [0, 19, 0, 5, 0, 76, 76, 9],
      [0, 19, 0, 11],
      [0, 19, 19, 9],
    ],
    numTicks: 95,
    maxSelf: 76,
  },
  metadata: {
    format: 'single',
    spyName: 'gospy',
    sampleRate: 100,
    units: 'samples',
    name: 'simple.golang.app.cpu 2022-03-09T20:25:55Z',
    appName: 'simple.golang.app.cpu',
    startTime: 1646857555,
    endTime: 1646857555,
    query: 'simple.golang.app.cpu{}',
    maxNodes: 8192,
  },
};
