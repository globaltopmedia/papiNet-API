# papiNet API Design Guide

## One Concept

A `thingy` is _a person or thing whose name one has forgotten, does not know, or does not wish to mention_.

In order to manage a `thingy`, we will define the following API endpoints:
* `post /thingies` **creates** a `thingy`
* `get /thingies` **lists** all `thingies`, with a minimum of detailed information from each `thingy`
* `get /thingies/{thingiesId}` **gets the details** of a specific `thingy`
* `put /thingies/{thingiesId}` **updates** a specific `thingy`, using a full representation of the `thingy`
* `patch /thingies/{thingiesId}` **updates** a specific `thingy`, using a partial representation of the `thingy`
* `delete /thingies/{thingiesId}` **deletes** a specific `thingy`

## Create a `thingy`

```
post / thingies
```
```json
{
  "foo": "Haha",
  "bar": "Boom"
}
```
```json
201 Created
{
  "id": "069cf51c-61f1-4000-acf8-dd866caf3246",
  "foo": "Haha",
  "bar": "Boom"
}
```

## List all `thingies`

```
get /thingies
```
```json
200 OK
[
  {
    "id": "069cf51c-61f1-4000-acf8-dd866caf3246"
  },
  {
    "id": "dfb73b1f-b359-45e4-9922-7982e2f950d7"
  }
]
```

## Get the details of a specific `thingy`

```
get /thingies/069cf51c-61f1-4000-acf8-dd866caf3246
```
```json
200 OK
{
  "id": "069cf51c-61f1-4000-acf8-dd866caf3246",
  "foo": "Haha",
  "bar": "Boom"
}
```

## Updates a specific `thingy` using a full representation

```
put /thingies/069cf51c-61f1-4000-acf8-dd866caf3246
```
```json
{
  "foo": "Haha",
  "bar": "Kaboom"
}
```
```json
200 OK
{
  "id": "069cf51c-61f1-4000-acf8-dd866caf3246",
  "foo": "Haha",
  "bar": "Kaboom"
}
```

## Updates a specific `thingy` using a partial representation

```
patch /thingies/069cf51c-61f1-4000-acf8-dd866caf3246
```
```json
{
  "bar": "Kaboom"
}
```
```json
200 OK
{
  "id": "069cf51c-61f1-4000-acf8-dd866caf3246",
  "foo": "Haha",
  "bar": "Kaboom"
}
```

## Delete a specific `thingy`

```
delete /thingies/069cf51c-61f1-4000-acf8-dd866caf3246
```
```json
204 No Content
```
