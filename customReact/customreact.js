function customRender(reactElemenet, container){
  // const domElement = document.createElement(reactElemenet.type)
  // domElement.innerHTML = reactElemenet.children
  // domElement.setAttribute('href', reactElemenet.props.href)
  // domElement.setAttribute('target', reactElemenet.props.target)

  // container.appendChild(domElement)

    const domElement = document.createElement(reactElemenet.type)
    domElement.innerHTML = reactElemenet.children

    for (const prop in reactElemenet.props) {
      if (prop === 'children') continue ;
      domElement.setAttribute(prop, reactElemenet.props[prop])
    }
    container.appendChild(domElement)
}

const reactElement = {
  type : 'a',
  props:{
    href : "https://google.com",
    target : '_blank'
  },
  children : 'Click me to visit google'

}


const mainContainer = document.querySelector('#root')

customRender(reactElement, mainContainer)