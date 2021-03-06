'use strict'

import leftPad from 'left-pad'

const DOC_STORE = 'ÿdocument-storeÿ'
const DOC_STORE_LENGTH = DOC_STORE.length
const META_STORE = 'ÿmeta-storeÿ'
const META_STORE_LENGTH = META_STORE.length
const SEQUENCE_STORE = 'ÿby-sequenceÿ'

export const forDocument = id => `${DOC_STORE}${id}`
export const forMeta = id => `${META_STORE}${id}`
export const forSequence = seq => `${SEQUENCE_STORE}${leftPad(seq, 16, 0)}`

export const sliceDocument = id => id.slice(DOC_STORE_LENGTH)
export const sliceMeta = id => id.slice(META_STORE_LENGTH)

export const toDocumentKeys = list => list.map(forDocument)
export const toMetaKeys = list => list.map(forMeta)

export const getDocumentKeys = list => list
  .filter(key => key.startsWith(DOC_STORE))
  .map(key => key.slice(DOC_STORE_LENGTH))
