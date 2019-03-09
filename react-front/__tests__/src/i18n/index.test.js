import React from 'react';
import I18n, {$t} from '../../../src/i18n';

jest.mock('react-native-gesture-handler', () => {});
jest.mock('../../../src/i18n/Locales/fr', () => ({
    "test": {
      "tata": "Music Room FR"
    }
  })
)
jest.mock('../../../src/i18n/Locales/en', () => ({
    "test": {
      "tata": "Music Room EN"
    }
  })
)

describe('>>>>>I18n translation', () => {
  it('function translate to english', () => {
    expect($t('test.tata')).toEqual('Music Room EN')
    expect($t('test.tata')).toEqual('Music Room EN')
  })
  it('function translate to french', () => {
    expect($t('test.tata', {locale: 'fr'})).toEqual('Music Room FR')
    expect($t('test.tata', {locale: 'fr'})).toEqual('Music Room FR')
  })
  it('function translate no exist', () => {
    expect($t('test.tutu')).toEqual('[missing \"mock.test.tutu\" translation]')
    expect($t('test.tutu')).toEqual('[missing \"mock.test.tutu\" translation]')
  })
})
