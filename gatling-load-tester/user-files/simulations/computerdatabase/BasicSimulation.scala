import io.gatling.core.Predef._
import io.gatling.http.Predef._
import io.gatling.jdbc.Predef._

class VerifyItem extends Simulation {
  val httpProtocol = http.baseURL("http://localhost:8081").inferHtmlResources()
  val scn = scenario("verify item with barcode").repeat(10) { exec(http("verify item").get("/api/inventory-controller/verify-item/100000000001")) }
  setUp(scn.inject(rampUsers(25) over(1)).protocols(httpProtocol))
}