import {obj, orderByProps} from "../work";

test('case: проверка работы метода сортировки orderByProps', () => {

const result = orderByProps(obj, ["name", "level"]);
  expect(result[0]).toEqual({"key": "name","value": "мечник"});
  expect(result[1]).toEqual({"key": "level", "value": 2});
  expect(result[2]).toEqual({"key": "attack", "value": 80});
  expect(result[3]).toEqual({"key": "defence", "value": 40});
  expect(result[4]).toEqual({"key": "health", "value": 10});
});