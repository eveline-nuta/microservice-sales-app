import io.gatling.core.Predef._
import io.gatling.http.Predef._
import io.gatling.jdbc.Predef._

class Repeat extends Simulation {
  val httpProtocol = http.baseURL("http://localhost:8080").inferHtmlResources()
  val scn = scenario("verify item with barcode").repeat(100) { exec(http("verify item").get("/api/inventory-controller/get-product/100000000004")) }
  setUp(scn.inject(rampUsers(10) over(1)).protocols(httpProtocol))
}