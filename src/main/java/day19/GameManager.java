package day19;
interface Game{
    void start();
    void stop();
    void play();

}
abstract class AbstractGame implements Game{
    public void start(){
        System.out.println("The game "+ this.getClass().getSimpleName() + " started");

    }
    public void stop(){
        System.out.println("The game "+ this.getClass().getSimpleName() + " stopped");
    }
}
class Bike extends AbstractGame implements Game{
    public void play(){
        System.out.println("You are playing " + this.getClass().getSimpleName()+" game, please wear helmet");
    }
}
class Car extends AbstractGame implements Game{
    public void play(){
        System.out.println("your playing");
    }
}
public class GameManager {
    public static void main(String[] args) {
        Game[] games = new Game[]{new Bike(),new Car()};
        for (Game game : games) {
            game.start();
            game.play();
            game.stop();
            System.out.println("_______________");
        }
    }
}
