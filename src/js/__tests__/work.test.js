import {obj, orderByProps} from "../work";

test('case: проверка работы метода сортировки orderByProps', () => {
  const result = orderByProps(obj, ["name", "level"]);
  const obrazec = [
    {key:'name', value:'мечник'},
    {key:'level', value:2},
    {key:'attack', value:80},
    {key:'defence', value:40},
    {key:'health', value:10},
  ]
expect(result).toEqual(obrazec)
})