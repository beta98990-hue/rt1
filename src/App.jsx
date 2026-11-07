import Student from './student/student'
import Car from './student/car'
import Phone from './student/phone'
import Calc from './student/calc'
import Player from './student/player'
import Animal from './student/animals'
import Xabar from './student/xabar'
import Box from './student/box'
import Square from './student/square'
import Username from './student/username'
import Fruit from './student/fruit'
import Circle from './student/circle'
import Teacher from './student/teacher'
import Temp from './student/temp'
import Exam from './student/exam'
import City from './student/city'
import Movie from './student/movie'
import './App.css'


function App() {

  return (
    <div>
      <Student name = "Dilshod" course = "2"/>
      <Car nomi = "CHevrolet" yili = "2023"/>
      <Phone model = "S22 Ultra" price = "1000$" memory = "1TB"/>
      <Calc a = "5" b = "2"/>
      <Player player = "dilshod"/>
      <Animal name = "Mushuk" legs = "4"/>
      <Xabar from = "Dilshod" children = "20" />
      <Box title="Mevalar">
        <p>Olma</p>
        <p>Anor</p>
      </Box>
      <Square side={6} />
      <Square side={4} />
      <Square side={8} />
      <Username login="python_dev" />
      <Username login="ali123" />
      <Username login="coder" />
      <Fruit name="Olma" color="qizil" />
      <Fruit name="Banan" color="sariq" />
      <Fruit name="Uzum" color="yashil" />
      <Fruit name="Shaftoli" color="to'q sariq" />
      <Circle radius={10} />
      <Teacher name="Dilnoza" subject="Matematika">Eng yaxshi o‘qituvchi</Teacher>
      <Temp celsius={100} />
      <Exam name="Aziza" score={78} />
      <City name="Samarqand" people="600000" />
      <City name="Buxoro" />
      <Shop item="Non" price={4000} count={3} />
      <Shop item="Sut" price={12000} count={2} />
      <FullName firstName="Aziza" lastName="Karimova" />
      <Movie title="Titanik" year={1997} rating={8}>Kema haqida film</Movie>
    </div>
  
      
  )
}

export default App
