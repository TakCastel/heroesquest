export const CHARACTERISTIC_CHANGE = 'CHARACTERISTIC_CHANGE';
export const SKILL_CHANGE = 'SKILL_CHANGE';
export const SKILL_CHECK = 'SKILL_CHECK';

export const characteristicChange = (characteristic, value) => ({
  type: CHARACTERISTIC_CHANGE,
  characteristic: characteristic,
  value: value
})

export const skillChange = (skill) => ({
  type: SKILL_CHANGE,
  skill: skill
})

export const skillCheck = (check) => ({
  type: SKILL_CHECK,
  check: check
})