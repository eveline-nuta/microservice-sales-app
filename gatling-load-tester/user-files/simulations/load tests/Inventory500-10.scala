import io.gatling.core.Predef._
import io.gatling.http.Predef._
import io.gatling.jdbc.Predef._

class InventoryFiveHundred extends Simulation {
  val httpProtocol1 = http.baseURL("http://localhost:8080").inferHtmlResources()
  val scn1 = scenario("Monolith Inventory").repeat(500) { 
  exec(http("Monolith Inventory").get("/api/inventory-controller/get-product/100000000004"))
  }
  val httpProtocol2 = http.baseURL("http://localhost:8081").inferHtmlResources()
  val scn2 = scenario("Microservice Inventory").repeat(500) { 
  exec(http("Microservice Inventory").get("/api/inventory-controller/get-product/100000000004"))
  }
  setUp(scn1.inject(rampUsers(25) over(10)).protocols(httpProtocol1),
  scn2.inject(rampUsers(25) over(10)).protocols(httpProtocol1)
        )
}