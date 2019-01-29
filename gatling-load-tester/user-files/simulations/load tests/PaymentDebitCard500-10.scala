import io.gatling.core.Predef._
import io.gatling.http.Predef._
import io.gatling.jdbc.Predef._

class DebitCardFiveHundred extends Simulation {
  val httpProtocol1 = http.baseURL("http://localhost:8080").inferHtmlResources()
  val scn1 = scenario("Monolith Payment Debit Card").repeat(500) { 
  exec(http("Monolith Payment Debit Card").post("/api/card-reader-controller/debit-card/1/700700700"))
  }
  val httpProtocol2 = http.baseURL("http://localhost:8082").inferHtmlResources()
  val scn2 = scenario("Microservice Payment Debit Card").repeat(500) { 
  exec(http("Microservice Payment Debit Card").post("/api/card-reader-controller/debit-card/1/700700700"))
  }
  setUp(scn1.inject(rampUsers(25) over(10)).protocols(httpProtocol1),
  scn2.inject(rampUsers(25) over(10)).protocols(httpProtocol1)
        )
}

