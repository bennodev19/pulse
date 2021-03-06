import React from 'react';
import { State } from '@pulsejs/core';

export function useWatcher<T = any>(state: State<T>, callback: (value: T) => void) {
  React.useEffect(() => {
    const key = state.watch(callback);
    return () => state.removeWatcher(key);
  }, []);
}
