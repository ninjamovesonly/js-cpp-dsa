// wrong solution
function countContacts(queries: string[][]): number[] {
  let contacts: string[] = [],
    result: number[] = [];

  if (queries.length < 2) {
    return [0];
  }

  for (let arr of queries) {
    let action = arr[0],
      value = arr[1];

    switch (action) {
      case "add": {
        contacts.push(value);
        break;
      }
      case "find": {
        const filtered = contacts.filter((contact) =>
          contact.startsWith(value)
        );
        result.push(filtered.length);
        break;
      }
      default: {
        break;
      }
    }
  }

  return result;
}

const input = [
  ["add", "hack"],
  ["add", "hackerrank"],
  ["find", "hac"],
  ["find", "hak"],
];
console.log(countContacts(input));
