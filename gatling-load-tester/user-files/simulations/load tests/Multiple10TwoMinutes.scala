import io.gatling.core.Predef._
import io.gatling.http.Predef._
import io.gatling.jdbc.Predef._

class Multiple10TwoMins extends Simulation {
  val httpProtocol1 = http.baseURL("http://localhost:8080").inferHtmlResources()
  val scn1 = scenario("MO VC").repeat(1) { 
  exec(http("MO VC").post("/api/card-reader-controller/validate-card/700700700/0000"))
  }
  val httpProtocol2 = http.baseURL("http://localhost:8082").inferHtmlResources()
  val scn2 = scenario("MS VC").repeat(1) { 
  exec(http("MS VC").post("/api/card-reader-controller/validate-card/700700700/0000"))
  }
  val httpProtocol3 = http.baseURL("http://localhost:8080").inferHtmlResources()
  val scn3 = scenario("MO GP").repeat(1) { 
  exec(http("MO GP").get("/api/inventory-controller/get-product/100000000004"))
  }
  val httpProtocol4 = http.baseURL("http://localhost:8081").inferHtmlResources()
  val scn4 = scenario("MS GP").repeat(1) { 
  exec(http("MS GP").get("/api/inventory-controller/get-product/100000000004"))
   }
  setUp(scn1.inject(constantUsersPerSec(10) during (120)).protocols(httpProtocol1),
  scn2.inject(constantUsersPerSec(10) during (120)).protocols(httpProtocol2),
  scn3.inject(constantUsersPerSec(10) during (120)).protocols(httpProtocol3),
  scn4.inject(constantUsersPerSec(10) during (120)).protocols(httpProtocol4)
        )
}

