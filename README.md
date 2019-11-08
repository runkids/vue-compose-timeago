# vue-compose-timeago
> :raised_hands: Format date with time ago statement using vue composition api 

**Depends on [@vue/composition-api](https://github.com/vuejs/composition-api)**

## Installation

```sh
```

## Usage

html
```html
<template>
  <div>
    Message created at : {{ time }} -  {{ timeago }}
  </div>
</template>
```

js
```javascript
setup() {
  const { timer } = useTimeago({ locale: 'en', long: true, refresh: true })
  const { time, timeago } = timer(new Date())

  return {
    time,
    timeago
  }
}

```

## Props
### useTimeago
| Property  |  Type |  Default |  Description |
| ------------ | ------------ | ------------ | ------------ |
| locale  |  String  |  en    | message language |
| refresh  |  Boolean, Number  |  false    | The period to update the component, in seconds. When true it will be 60s. Also you can bind a number.|
| long  |  Boolean  |  false    | Show long string with time message . ex. 3h -> 3 hours age|

- useTimeago will return a timer function

### timer
| Property  |  Type |  Default |  Description |
| ------------ | ------------ | ------------ | ------------ |
| datetime  |  Date, String, Number  |  new Date()  | The datetime to be formatted.|

- timer will return time and timeago

## Contributions
locale translations: The component needs more locale translations. You can `Open an issue to write the locale translations, or submit a pull request`. 
See example [here](https://github.com/runkids/vue2-timeago/blob/master/src/lib/lang).

locale support list : 
- English ( en )  
- 繁體中文 ( zh_TW ) 
- 简体中文 ( zh_CN )
- 日本語 ( jp )
- Portugal(Brazil) ( pt_BR )
- Spain ( es )
- Arabia ( ar )
- French ( fr )
- Polish ( pl )
- Turkish ( tr )

Thanks for help:

<a href="https://github.com/flromano">
  <img src="https://avatars1.githubusercontent.com/u/8169566?s=460&v=4" width="30" style="border-radius: 100%;"/>
</a>

<a href="https://github.com/NathanFallet">
  <img src="https://avatars2.githubusercontent.com/u/30439790?s=460&v=4" width="30" style="border-radius: 100%;"/>
</a>

<a href="https://github.com/waltergammarota">
  <img src="https://avatars0.githubusercontent.com/u/3790610?s=460&v=4" width="30" style="border-radius: 100%;"/>
</a>

<a href="https://github.com/Mohammad-Ha">
  <img src="https://avatars0.githubusercontent.com/u/15388052?s=460&v=4" width="30" style="border-radius: 100%;"/>
</a>

<a href="https://github.com/netvistor">
  <img src="https://avatars1.githubusercontent.com/u/26851628?s=460&v=4" width="30" style="border-radius: 100%;"/>
</a>

<a href="https://github.com/aliemretaskin">
  <img src="https://avatars0.githubusercontent.com/u/12280383?s=460&v=4" width="30" style="border-radius: 100%;"/>
</a>

<a href="https://github.com/Nisgrak">
  <img src="https://avatars3.githubusercontent.com/u/19597708?s=460&v=4" width="30" style="border-radius: 100%;"/>
</a>