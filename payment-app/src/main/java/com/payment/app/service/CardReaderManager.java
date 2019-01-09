package com.payment.app.service;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.payment.app.domain.Debit;
import org.springframework.stereotype.Service;

import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.URL;

//http client which builds the connection to the banking microservice
@Service
public class CardReaderManager {

        public Boolean validateCard(String cardNumber, String pin)
        {
			try
			{
				URL url = new URL("http://localhost:8083/api/banking-controller/verify-card/"+cardNumber+"/"+pin);
				HttpURLConnection con = (HttpURLConnection) url.openConnection();
				con.setRequestMethod("GET");
				BufferedReader in = new BufferedReader(new InputStreamReader(con.getInputStream()));
				String inputLine;
				StringBuffer content = new StringBuffer();
				while ((inputLine = in.readLine()) != null) {
					content.append(inputLine);
				}
				in.close();
				con.disconnect();
				return Boolean.parseBoolean(content.toString());
			}
			catch(Exception e){
				return false;
			}

        }

        public Debit debitCard(Double price, String cardNumber)
        {

			try
			{

				URL url = new URL("http://localhost:8083/api/banking-controller/debit-card/"+price+"/"+cardNumber);
				HttpURLConnection con = (HttpURLConnection) url.openConnection();
				con.setRequestMethod("GET");
				BufferedReader in = new BufferedReader(new InputStreamReader(con.getInputStream()));
				String inputLine;
				StringBuffer content = new StringBuffer();
				while ((inputLine = in.readLine()) != null) {
					content.append(inputLine);
				}
				in.close();
				con.disconnect();

				ObjectMapper objectMapper = new ObjectMapper();
				return objectMapper.readValue(content.toString(), Debit.class);
			}
			catch(Exception e){
				return null;
			}

        }
}
