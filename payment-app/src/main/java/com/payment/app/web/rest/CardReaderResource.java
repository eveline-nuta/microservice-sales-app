package com.payment.app.web.rest;
//	rest API o interfata care primeste requesturi si da response uri, poarta de intrare in app
//import com.payment.app.domain.Card;

import com.payment.app.domain.Debit;
import com.payment.app.service.CardReaderManager;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.*;

import java.net.URISyntaxException;

    /**
     * CardReaderResource controller
     */

    @RestController
    @RequestMapping("/api/card-reader-controller")
    public class CardReaderResource {

    @Autowired
        private CardReaderManager manager;

        private final Logger log = LoggerFactory.getLogger(CardReaderResource.class);


        /**
         * POST validateCard
         */
        @PostMapping("/validate-card/{cardNumber}/{pin}")
        public Boolean validateCard(@PathVariable String cardNumber, @PathVariable String pin)
        {
            return manager.validateCard(cardNumber, pin);
        }


        /**
         * POST debitCard
         */
        @PostMapping("/debit-card/{price}/{cardNumber}")
        public Debit debitCard(@PathVariable Double price, @PathVariable String cardNumber)
        {
            return manager.debitCard(price, cardNumber);
        }

    }
