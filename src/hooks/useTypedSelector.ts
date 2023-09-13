import { TypedUseSelectorHook, useSelector } from 'react-redux';
import { RootState } from '../store';

export const useTypedSelectot: TypedUseSelectorHook<RootState> = useSelector;
