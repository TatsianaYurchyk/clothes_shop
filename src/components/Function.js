function openCity(evt) {
    // Объявить все переменные
    // const i, tabcontent, tablinks;
  
    // Получить все элементы с помощью class="tabcontent" и спрятать их
   
    const tablinks = document.getElementsByClassName("menu_link")
    for (const i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
  
    // Показать текущую вкладку и добавить "active" класс для кнопки, которая открыла вкладку
    evt.currentTarget.className += " active";
  
  }

  export default openCity;

//   change = (event) => {
//     const name = event.target.name;
//     const value = event.target.value;
//     let fields = this.state.fields;
//     fields[event.target.name] = event.target.value;
//     this.setState({ fields },
//         () => { this.validate(name, value) })
// }