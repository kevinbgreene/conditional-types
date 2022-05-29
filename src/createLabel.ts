interface IdLabel {
  id: number /* some fields */;
}
interface NameLabel {
  name: string /* other fields */;
}

type NameOrId<T extends number | string> = T extends number
  ? IdLabel
  : NameLabel;

function createLabel<T extends number | string>(idOrName: T): NameOrId<T> {
  if (typeof idOrName === "string") {
    return { name: idOrName } as NameOrId<T>;
  } else {
    return { id: idOrName } as NameOrId<T>;
  }
}
