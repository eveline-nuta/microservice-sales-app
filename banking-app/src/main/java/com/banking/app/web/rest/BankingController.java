package com.banking.app.web.rest;

import com.banking.app.domain.Debit;
import com.banking.app.service.BankingManager;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

    @RestController
    @RequestMapping("/api/banking-controller")
    public class BankingController {

        @Autowired
        private BankingManager bankingManager;

        @GetMapping("/verify-card/{cardNumber}/{pin}")
        public Boolean verifyCard(@PathVariable String cardNumber, @PathVariable String pin) {

            return bankingManager.verifyCard(cardNumber,pin);

        }

        @GetMapping("/debit-card/{price}/{cardNumber}")
        public Debit debitCard(@PathVariable Double price, @PathVariable String cardNumber) {

           return bankingManager.debitCard(price,cardNumber);
        }
    }

