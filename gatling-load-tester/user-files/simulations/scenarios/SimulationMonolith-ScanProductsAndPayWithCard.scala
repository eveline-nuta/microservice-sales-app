
import scala.concurrent.duration._

import io.gatling.core.Predef._
import io.gatling.http.Predef._
import io.gatling.jdbc.Predef._

class SimulationMonolithScanProductsAndPayWithCard extends Simulation {

	val httpProtocol = http
		.baseURL("http://localhost:9000")
		.disableAutoReferer
		.acceptEncodingHeader("gzip, deflate")
		.userAgentHeader("Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/71.0.3578.98 Safari/537.36")

	val headers_11 = Map(
		"Accept" -> "application/json, text/plain, */*",
		"Accept-Language" -> "en-US,en;q=0.9,de;q=0.8",
		"Authorization" -> "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsImF1dGgiOiJST0xFX0FETUlOLFJPTEVfVVNFUiIsImV4cCI6MTU0NzY1OTM4M30.HOqP3yBjpP3SfW0OxBqD7KS_NoM1oKJBsHFHQvGu1HMH4nMjkLjQZVgtUrfFZZYK13FrUqkiU_k0SPwBBuZaNg",
		"Referer" -> "http://localhost:9000/")

	val headers_74 = Map(
		"Accept" -> "application/json, text/plain, */*",
		"Accept-Language" -> "en-US,en;q=0.9,de;q=0.8",
		"Authorization" -> "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsImF1dGgiOiJST0xFX0FETUlOLFJPTEVfVVNFUiIsImV4cCI6MTU0NzY1OTM4M30.HOqP3yBjpP3SfW0OxBqD7KS_NoM1oKJBsHFHQvGu1HMH4nMjkLjQZVgtUrfFZZYK13FrUqkiU_k0SPwBBuZaNg",
		"Origin" -> "http://localhost:9000",
		"Referer" -> "http://localhost:9000/")

    val uri1 = "localhost"
    val uri2 = "http://update.googleapis.com/service/update2"
    val uri3 = "http://redirector.gvt1.com/edgedl/release2/chrome_component/AJpfGW6DMiJQ_1002/1002_all_sthset.crx3"

	val chain_0 = exec(http("Verify Stock")
			.get("/api/inventory-controller/verify-product-stock/100000000001")
			.headers(headers_11))
		.exec(http("Get Product")
			.get("/api/inventory-controller/get-product/100000000001")
			.headers(headers_11))
		.exec(http("Verify Stock")
			.get("/api/inventory-controller/verify-product-stock/100000000002")
			.headers(headers_11))
		.exec(http("Get Product")
			.get("/api/inventory-controller/get-product/100000000002")
			.headers(headers_11))
		.exec(http("Verify Stock")
			.get("/api/inventory-controller/verify-product-stock/100000000003")
			.headers(headers_11))
		.exec(http("Get Product")
			.get("/api/inventory-controller/get-product/100000000003")
			.headers(headers_11))
		.exec(http("Verify Stock")
			.get("/api/inventory-controller/verify-product-stock/100000000004")
			.headers(headers_11))
		.exec(http("Get Product")
			.get("/api/inventory-controller/get-product/100000000004")
			.headers(headers_11))
		.exec(http("Verify Stock")
			.get("/api/inventory-controller/verify-product-stock/100000000006")
			.headers(headers_11))
		.exec(http("Get Product")
			.get("/api/inventory-controller/get-product/100000000006")
			.headers(headers_11))
		.exec(http("Verify Stock")
			.get("/api/inventory-controller/verify-product-stock/100000000005")
			.headers(headers_11))
		.exec(http("Get Product")
			.get("/api/inventory-controller/get-product/100000000005")
			.headers(headers_11))
		.exec(http("Verify Stock")
			.get("/api/inventory-controller/verify-product-stock/100000000005")
			.headers(headers_11))
		.exec(http("Get Product")
			.get("/api/inventory-controller/get-product/100000000005")
			.headers(headers_11))
		.exec(http("Validate Card")
			.post("/api/card-reader-controller/validate-card/700700700/0000")
			.headers(headers_74))
		.exec(http("Debit Card")
			.post("/api/card-reader-controller/debit-card/175/700700700")
			.headers(headers_74))
		.exec(http("Update Stock")
			.post("/api/inventory-controller/update-stock/1053/1")
			.headers(headers_74))
		.exec(http("Update Stock")
			.post("/api/inventory-controller/update-stock/1051/1")
			.headers(headers_74))
		.exec(http("Update Stock")
			.post("/api/inventory-controller/update-stock/1055/2")
			.headers(headers_74))
		.exec(http("Update Stock")
			.post("/api/inventory-controller/update-stock/1054/1")
			.headers(headers_74))
		.exec(http("Update Stock")
			.post("/api/inventory-controller/update-stock/1056/1")
			.headers(headers_74))
		.exec(http("Update Stock")
			.post("/api/inventory-controller/update-stock/1052/1")
			.headers(headers_74))
					
	val scn = scenario("SimulationMonolithScanProductsAndPayWithCard").exec(
		chain_0)

	setUp(scn.inject(atOnceUsers(1))).protocols(httpProtocol)
}