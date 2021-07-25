import React from 'react'
import {rootStore} from '../Data/stores/root-store';
export const useStores = () =>React.useContext(rootStore);