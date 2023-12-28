
一、React 介绍
1. 基础原理
严格上讲，React 并不是框架（angular这样的算框架），仅仅是一个 UI 库。官方对 React 的定义为：
用于构建用户界面的 JavaScript 库
React 和当下一些其他框架，最重要的思想就是 数据驱动视图

上图即是数据驱动视图最简单的表达。大家可以将数据看做 DNA，UI 当做长相，长相由 DNA 决定（医美除外）。当 DNA 发生了变化，长相也要发生变化。所以可以看做：数据快照与 UI 快照是一一对应的关系。
状态变化，可以认为是一个方法，该方法会修改数据，而数据的变化会影响 UI，因此视图发生了变化。
上面的这块内容你看明白了，后面写起 react 代码会更加轻松。
上面你学会了，那实际上怎么写呢？
2. jsx 语法
先看下面的代码片段，重点关注 return 部分的写法（不着急把代码放到IDE中，先看懂，后面会有完整示例代码）。
const Example = () => {
  return (
    <div>
      Hello {props.name}
    </div>
  );
}
react 中将类似这样的写法（HTML 中夹杂着看似 JavaScript 的语句在其中）称之为 jsx 语法，它是对 JavaScript 语法的扩展。jsx 看起来有点像模板语言，但是他又具有 JavaScript 的全部功能。
写 jsx 有什么好处？
我个人觉得最大的好处就是直观、容易理解。大家看几个例子：
const Example = () => {
  const  arr = ['java', 'html', 'javascript', 'python', 'c++'];
  return (
    <div>
      Hello: {arr.map(val => {
        return (
          <span style={{ marginRight: 10 }}>{val}</span>
        )
        })}
    </div>
  );
}

上面的代码会生成下图所示的 dom 结构：

jsx 中可以做条件判断，如：
const Example = () => {
    // 条件判断，随机显示男女
    const greater = Math.random() * 10 > 5;
  return (
    {greater > 5 ? (
      <div style={{ color: 'green' }}>我是男生</div>
    ) : (
      <div style={{ color: 'red' }}>我是女生</div>
    )}
  );
}
是不是很直观，很容易理解。这就是 jsx，你可以将 JavaScript 写在 UI 中。开发的时候心情非常愉悦~
下面先带大家看一个可以work的代码：
3. React 组件渲染
下面的示例代码基于上节课【环境搭建】生成的本地项目
在index.tsx 中粘贴下面这段代码，我们在屏幕中显示 hello + 【名字】的功能。
import React from 'react';
import ReactDOM from 'react-dom/client';
// 定义 App 组件 props 的类型
type Props = {
  name?: string;
}
// 定义一个叫App 的组件
function App(props: Props) {
  return (
    <div className="App">
      <h1 style={{ color: 'red', textAlign: 'center' }}>
        Hello {props.name || '未知名字'}
      </h1>
    </div>
  );
}

// 找到组件将要渲染的 html tag 位置（使一个 id ="root" 的标签）
const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(
  <React.StrictMode>
    {/*大家关注下面的一行，渲染上面写的组件App */}
    <App name={"志超"} />
  </React.StrictMode>
);

export default App;

在 document.tsx 文件中增加一行 <div id="root" />：

展示效果如下：


接下来我们会逐个拆解上面的代码做了什么事情。
首先假设你现在要展示一个 「Hello + 姓名」的文本。其中姓名是变量，值可能是任何字符串。那么参照 jsx 写法就是 <div>Hello, {name}</div>。其中 name 就是那个变量。现在需要把它变成一个 react 组件：
type Props = { // 不了解ts的话，可以忽略下面的Props
  name?: string;
}
function App(props: Props) {
  return (
    <div className="App">
      <h1 style={{ color: 'red', textAlign: 'center' }}>
        Hello {props.name}
      </h1>
    </div>
  );
}

export default App;

什么是组件？
组件是你将 UI 拆分为独立可复用的代码片段，并对每个片段进行独立构思和数据处理。组件，从概念上类似于 JavaScript 函数。它接受任意的入参（即 “props”），并返回用于描述页面展示内容的 React 元素。这类组件被称为“函数组件”，因为它本质上就是 JavaScript 函数。
需要注意📢：组件的最后一句需要一个 return，该 return 返回 jsx 内容。不允许在 return 中定义变量了。所有变量的定义和方法定义都要在 return 之前
如下面的写法就是错误的：
type Props = { // 不了解ts的话，可以忽略下面的Props
  name?: string;
}
// 错误的写法1
function App(props: Props) {
  return (
    const tmp = '123';
    <div className="App">
      <h1 style={{ color: 'red', textAlign: 'center' }}>
        Hello {props.name}
      </h1>
    </div>
  );
}
// 错误的写法2
function App(props: Props) {
  return (
    function tmp() {};
    <div className="App">
      <h1 style={{ color: 'red', textAlign: 'center' }}>
        Hello {props.name}
      </h1>
    </div>
  );
}
// 错误的写法3
function App(props: Props) {
  return (
    <div className="App">
      <h1 style={{ color: 'red', textAlign: 'center' }}>
        Hello {props.name}
      </h1>
    </div>
  );
  // 这个跟其他语言一样，return 之后不会执行
  const a = 123;
}
上面的 props 就是传给这个组件的变量集合（当然，你也可以给参数命名成别的名称）。因为传给一个组件的变量，可能不止一个，所以都放在一个叫 props 的对象中。你从中取出你想要的 name 变量即可。
传给组件的所有属性都可以认为是组件的 props。如果你使用 TypeScript 开发的话，定义一个组件的时候，要先定义清楚这个组件可以接受哪些 props。并不是所有的东西都可以传给组件的。

组件写好了，那怎么把它渲染到 HTML 中呢？ice 框架已经帮你自动做好了。
究其底层原理，是 react-dom 帮你实现的~
// 找到组件将要渲染的 html tag 位置（使一个 id ="root" 的标签）
const root = ReactDOM.createRoot(document.getElementById('root')!);
页面展示的结果确实如我们所料，App 组件在 id="root" 的 div 中渲染出来了。
大家可以简单把 react-dom 理解成，把一个 react 组件渲染到指定的位置上。上面的代码中，document.getElementById('root')就是这个组件要被渲染的位置。这意味着，页面中必然存在一个 HTML 标签，他的 id 属性是 root。
这样一个最简单的 react 组件和渲染就完成了。看起来是不是很简单？

更近一步，现在我们要加一点交互行为，让页面动起来（死气沉沉的页面谁都不喜欢）：写个计数器，点一下就加1 如何？
但是按照上面的学习，组件内部应该有一个变量，当点击发生的时候，这个变量需要加1 。正如开头所说， react是数据驱动视图的，数据的变化才能导致视图的变化。那么我有了这个变量，还要有一个可能修改这个变量的方法，这样才会促使视图更新。
有的同学可能会有疑问，我定义变量后，直接变量加1不行么？答案是不行的，直接操作变量（视图已经渲染完毕了），并不会改变这次渲染时候的变量值，因此视图不会更新
先看最终的代码，如下：
import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';

type Props = {
  name?: string;
}
function App(props: Props) {
  return (
    <div className="App">
      <h1 style={{ color: 'red', textAlign: 'center' }}>
        Hello {props.name || '未知名字'}
      </h1>
    </div>
  );
}
type CounterProps = {
  start?: number;
}
const Counter = (props: CounterProps) => {
  // 设置内部状态的初始值，初始值是外部传进来的，当然，如果不传，那就使用默认值 0
  const [count, setCount] = useState(props.start || 0);

  const plus = () => {
    // 更新数据
    setCount(count + 1);
  }
  // return 返回的就是 UI，也是所见即所得，你看到的 dom 结构就是页面渲染后看到内容
  return (
    <div style={{ textAlign: 'center' }}>
      Count: {count}
      <button onClick={plus}>点我加1</button>
    </div>
  );
}
// 找到组件将要渲染的 html tag 位置（使一个 id ="root" 的标签）
const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(
  <React.StrictMode>
    {/*大家关注下面的一行，渲染上面写的组件 */}
    <App name={"志超"} />
    <Counter start={10} />
  </React.StrictMode>
);

export default App;
你会发现页面变成下面的样子：
此处为语雀视频卡片，点击链接查看：计时器.mov

上面的代码，引入了新的内容 useState，它帮我们解决了组件内部如何定义变量和如何更新这个变量的问题。
有了它，我们就可以响应操作行为，通过方法，更新数据，数据的更新驱动视图的更新，我们就会看到UI随着我们的点击不断变化。
大家可能要问，这个 useState 到底是什么？
useState 是 react hooks 的一种，也是接下来要带领大家学习的新内容。
在学习 hook 之前，我们先对前面的内容简短总结一下：
本小节中，我们写了两个组件，一个没有内部状态的，一个有内部状态的（有计时器）。通常，这两类组件又可以称为：简单组件（simple component） 和 有状态组件（stateful component）。实际开发中，我们希望更多的简单组件，通过简单组件的组合，像拼积木一样，拼出完整页面。这样设计的最大好处是页面非常容易维护且不容易产生 bug。
关于组件定义我们讲了函数式组件，其实还可以使用 ES6 的 class来定义组件，跟Java类有点类似：
class Welcome extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}
那究竟该怎么写，个人还是推荐函数组件的，一是简单，二是容易理解。本课程后续也不会提class组件，当然如果想学习了解类组件也是可以的，可以参考链接：
https://react.docschina.org/docs/state-and-lifecycle.html
4. Hook
hook 是react 16.8 新增的特性，可以让你在不编写 class 的情况下使用 state 和其他 react 特性。
上面栗子中，useState 就是一个 hook。
那为什么要增加这样一个新特性？这个跟历史原因有关，在 hook 出来之前，react 开发者们发现，要想在组件之间复用状态逻辑很困难，可能会使用高阶组件来做状态逻辑的复用，但是高阶组件 debug 困难，并且容易倾城嵌套地狱，大家希望React 为共享状态逻辑提供更好的原生途径。
其次，随着业务复杂度的提升，class component 里面的生命周期中充斥着各种状态的判断和取数逻辑的耦合，造成代码的可读性和可维护性越来越差。
hooks 的出现，解决了上面的问题。
如果你学会使用 hook，哪怕你不了解 class component 和他对应的生命周期，不了解 this 指针，不了解高阶组件。没关系，你仍然可以正常完成业务需求。
那 hook 究竟是什么？
Hook 是一些可以让你在函数组件里“钩入” React state 及生命周期等特性的函数。Hook 不能在 class 组件中使用。
光看定义你可以不是很理解，我们接下来结合例子看，看看都有哪些 hook，以及如何使用 hook。 
useState 
import React, { useState } from 'react';

function Example() {
  // 声明一个叫 “count” 的 state 变量。
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}
在这里，useState 就是一个 Hook （通过在函数组件里调用它来给组件添加一些内部 state。React 会在重复渲染时保留这个 state。useState 会返回一对值：当前状态和一个让你更新它的函数，你可以在事件处理函数中或其他一些地方调用这个函数。你可以简单把它理解成调用这个函数会更新 state 的状态，然后这组件重新渲染。（使用 State Hook里展示了一个对比 useState 和 this.state 的例子）。
useState 唯一的参数就是初始 state。在上面的例子中，我们的计数器是从零开始的，所以初始 state 就是 0。值得注意的是，这里的 state 不一定要是一个对象，可以是任意值。这个初始 state 参数只有在第一次渲染时会被用到。
你可以在一个组件中多次使用 State Hook:
function ExampleWithManyStates() {
  // 声明多个 state 变量！
  const [age, setAge] = useState(42);
  const [name, setName] = useState('chaochao');
  const [friends, setFriends] = useState([{ name: 'lulu' }]);
  // ...
}
看了上面的栗子, hook 是一个输入一个参数，返回一个数组的函数。
useEffect
这个 hook 的核心作用就是在组件渲染完毕之后，你想做点别的事情（我们统一把这些别的事情称为“副作用”）。
比如你想渲染完之后立即进行数据获取、事件订阅或者手动修改过 DOM，这些都是副作用，都可以在 useEffect 中执行。
useEffect 就是一个 Effect Hook，给函数组件增加了操作副作用的能力。它跟 class 组件中的 componentDidMount(组件第一次渲染结束后触发)、componentDidUpdate（组件每次更新结束后触发） 和 componentWillUnmount（组件将要卸载的时候触发） 具有相同的用途，只不过被合并成了一个 API（链接：使用 Effect Hook里展示了 useEffect 和 clss 组件中这些生命周期的对比例子）。
即 useEffect 可以根据参数的不同配置，在组件不同的渲染时机被调用。useEffect 接受两个参数：
1. 副作用函数
2. 依赖项，类型是数组
// 依赖项是空数组，第一次渲染结束后，调用一次
useEffect(() => {
    ...
},[]);

// 依赖项有值（不论个数），组件第一次渲染结束后，调用一次。后面检测到依赖发生变化的时候，自动调用，每变一次调用一次
useEffect(() => {
    ...
},[依赖1,依赖2]);

// 没有填依赖项，则组件每次渲染结束后，都调用一次，不限次数
useEffect(() => {
    ...
});
例如，下面这个组件在 React 更新 DOM 后会设置一个页面标题：
import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';

type Props = {
  name?: string;
}
function App(props: Props) {
  return (
    <div className="App">
      <h1 style={{ color: 'red', textAlign: 'center' }}>
        Hello {props.name || '未知名字'}
        <Example />
      </h1>
    </div>
  );
}
function Example() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    // 使用浏览器的 API 更新页面标题
    document.title = `You clicked ${count} times`;
    console.log('useEffect 执行');
  });
  console.log('示例组件渲染');
  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => {
        console.log('先点击了我');
        setCount(count + 1)
      }}>
        Click me
      </button>
    </div>
  );
}
export default App;
我们看一下上面的代码执行的效果：

初始化之后，useEffect 先执行了一遍。当我点击按钮的时候，按钮的回调函数先执行，然后导致组件重新渲染。渲染完毕后，useEffect 再执行一次。以此类推~
由于副作用函数是在组件内声明的，所以它们可以访问到组件的 props 和 state。默认情况下，React 会在每次渲染后调用副作用函数 —— 包括第一次渲染的时候。（我们会在使用 Effect Hook中跟 class 组件的生命周期方法做更详细的对比）
副作用函数还可以通过返回一个函数来指定如何“清除”副作用。例如，在下面的组件中使用副作用函数来订阅好友的在线状态，并通过取消订阅来进行清除操作：
import React, { useState, useEffect } from 'react';

function FriendStatus(props) {
  // 引入状态 hook
  const [isOnline, setIsOnline] = useState(null);

  function handleStatusChange(status) {
    setIsOnline(status.isOnline);
  }
    // 每次渲染添加订阅，卸载时取消订阅 
  useEffect(() => {
    // 这里假设有个 ChatAPI 的服务
    ChatAPI.subscribeToFriendStatus(props.friend.id, handleStatusChange);
    // 返回取消订阅的函数
    return () => {
      ChatAPI.unsubscribeFromFriendStatus(props.friend.id, handleStatusChange);
    };
  });

  if (isOnline === null) {
    return 'Loading...';
  }
  return isOnline ? 'Online' : 'Offline';
}
在这个示例中，React 会在组件销毁时取消对 ChatAPI 的订阅，然后在后续渲染时重新执行副作用函数。如果传给 ChatAPI 的 props.friend.id 没有变化，你也可以告诉 React 跳过重新订阅，即:
// 只有props.friend.id变化的时候，才会取消订阅并重新订阅
useEffect(() => {
  // 这里假设有个 ChatAPI 的服务
  ChatAPI.subscribeToFriendStatus(props.friend.id, handleStatusChange);
  // 返回取消订阅的函数
  return () => {
    ChatAPI.unsubscribeFromFriendStatus(props.friend.id, handleStatusChange);
  };
}, [props.friend.id]);
跟 useState 一样，你可以在组件中多次使用 useEffect，每个 effect 关注自己的事情即可。
function FriendStatusWithCounter(props) {
  const [count, setCount] = useState(0);
  // 一个组件中可以使用多个useEffect,
  useEffect(() => {
    document.title = `You clicked ${count} times`;
  });

  const [isOnline, setIsOnline] = useState(null);
  useEffect(() => {
    // 这里假设有个 ChatAPI 的服务
    ChatAPI.subscribeToFriendStatus(props.friend.id, handleStatusChange);
    return () => {
      ChatAPI.unsubscribeFromFriendStatus(props.friend.id, handleStatusChange);
    };
  });

  function handleStatusChange(status) {
    setIsOnline(status.isOnline);
  }
  // ...
通过使用 Hook，你可以把组件内相关的副作用组织在一起（例如创建订阅及取消订阅），而不要把它们拆分到不同的生命周期函数里。
当然，除了上面上面的几个 hook，开发中常用的 hook 还有其他的，如 useContext、useReducer、useCallback、useMemo等，文本就不在挨个展开，大家可以自行学习了解。
需要注意的是，不管是什么样的 hook，react 规定我们必须把 hooks 写在函数的最外层，不能写在 ifelse 等条件语句当中，来确保 hooks 的执行顺序一致。
react 还支持写自定义 hook，本文不在展开，大家可以选学。
自定义 hook（选学，了解即可）
前面有提到，有时候需要在组件之间复用一些状态逻辑，这个时候可以尝试用自定义 hook 解决。
我们介绍了一个叫 FriendStatus 的组件，它通过调用 useState 和 useEffect 的 Hook 来订阅一个好友的在线状态。假设我们想在另一个组件里重用这个订阅逻辑，这会你该怎么写呢？
首先，我们把这个逻辑抽取到一个叫做 useFriendStatus（为什么叫 useFriendStatus呢？因为我们约定 react hook 的命名规范是 useXXX，前缀必须是 use） 的自定义 Hook 里：
为什么前缀必须是 use 呢？ 因为 React 的官方 ESLint 插件认为 use 开头是自定义 Hook。
如果你不用 use 开头，ESLint 插件就会认为这是一个普通函数，调用时不符合 Hook 规则时不会报错，你就可能写出有问题的代码。
import React, { useState, useEffect } from 'react';

function useFriendStatus(friendID) {
  // 自定义状态
  const [isOnline, setIsOnline] = useState(null);

  function handleStatusChange(status) {
    setIsOnline(status.isOnline);
  }

  useEffect(() => {
    ChatAPI.subscribeToFriendStatus(friendID, handleStatusChange);
    return () => {
      ChatAPI.unsubscribeFromFriendStatus(friendID, handleStatusChange);
    };
  });
    // 返回一个变量
  return isOnline;
}
有了这个自定义的 hooks 后，我们就可以在目标组件中使用它了：
// 显示在线状态的组件
function FriendStatus(props) {
  const isOnline = useFriendStatus(props.friend.id);

  if (isOnline === null) {
    return 'Loading...';
  }
  return isOnline ? 'Online' : 'Offline';
}

// 展示好友信息的组件，在线和不在线字体颜色不同
function FriendListItem(props) {
  const isOnline = useFriendStatus(props.friend.id);

  return (
    <li style={{ color: isOnline ? 'green' : 'black' }}>
      {props.friend.name}
    </li>
  );
}

这两个组件的 state 是完全独立的。Hook 是一种复用状态逻辑的方式，它不复用 state 本身。事实上 Hook 的每次调用都有一个完全独立的 state —— 因此你可以在单个组件中多次调用同一个自定义 Hook。

react 可以讲的内容很多，其他的内容大家可以学习官方文档了解，但不是你必须现在去学习掌握的，只是心里要有个印象，如果开发中碰到难以解决的问题，或者可以查看官方文档就能自我解决。
二、开放作业
使用上一节课搭建的本地开发环境，完成一个简单的计时器功能。demo如下图所示

点击开始的时候，秒表每隔一秒加1。
点击暂停，维持现在的时间，停止计时。再点击开始，从当前时间继续计时。
点击停止，计时器归0。
课程小结
本文主要介绍了 react 框架的基础，并介绍如何开发组件和组件是如何渲染的，同时推荐大家直接学习使用函数式组件进行开发。接着介绍了函数式组件中必须了解的概念：react hooks。react 要学习的内容很多，建议同学们先去学习 react 官方文档。
本课程学习之后大家可以尝试进入实际的开发中了。开发中带着疑问再去查阅官方文档，可以更快的上手开发。
附录
集团奇点学堂 React 入门视频教程：https://grow.alibaba-inc.com/course/4800010632007717?spm=a1z24uy2.26994894.share_dingcard.18601
对 React 原理和源码感兴趣的同学可以学习：https://grow.alibaba-inc.com/course/4800013340811704/section/1800013405840704
react 官方中文文档：https://react.docschina.org/docs/getting-started.html