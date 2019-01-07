package com.payment.app.web.rest;

//import com.payment.app.domain.Card;

import com.payment.app.domain.Debit;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.*;

import java.net.URISyntaxException;

    /**
     * CardReaderControllerResource controller
     */
    @RestController
    @RequestMapping("/api/card-reader-controller")
    public class CardReaderResource {

       // private BankService bankService;

        public CardReaderResource(){
           // this.bankService=new BankService();
        }
        private final Logger log = LoggerFactory.getLogger(CardReaderResource.class);


        /**
         * POST validateCard
         */
        @PostMapping("/validate-card/{cardNumber}/{pin}")
        public Boolean validateCard(@PathVariable String cardNumber, @PathVariable String pin)
        {
            return null;
                //bankService.verifyCard(cardNumber, pin);
        }


        /**
         * POST debitCard
         */
        @PostMapping("/debit-card/{price}/{cardNumber}")
        public Debit debitCard(@PathVariable Double price, @PathVariable String cardNumber)
        {
            return null;
            //bankService.debitCard(price, cardNumber);
        }

    }
