package com.banking.app.web.rest;

import com.banking.app.domain.Card;
import com.banking.app.domain.Debit;
import com.banking.app.repository.CardRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.UUID;

    @RestController
    @RequestMapping("/api/banking-controller")
    public class BankingController {

        @Autowired
        private CardRepository cardRepository;

        @PostMapping("/verify-card/{cardNumber}/{pin}")
        public Boolean verifyCard(@PathVariable String cardNumber, @PathVariable String pin) {

            Card card = cardRepository.findByCardNumber(cardNumber);
            if (card != null) {
                if (card.getPin().equals(pin))
                    return true;
                else
                    return false;
            } else return false;

        }

        @PostMapping("/debit-card/{price}/{cardNumber}")
        public Debit debitCard(@PathVariable Double price, @PathVariable String cardNumber) {

            Debit debit = new Debit();


            Card selectedCard = cardRepository.findByCardNumber(cardNumber);

            if (selectedCard != null && selectedCard.getBalance() >= price) {
                selectedCard.setBalance(selectedCard.getBalance() - price);
                debit.setMoneyAmount(price);
                debit.setStatus(true);
                debit.setTransactionId(UUID.randomUUID().toString());
                debit.setAccountBalance(selectedCard.getBalance());
            } else {
                debit.setStatus(false);
                debit.setTransactionId(UUID.randomUUID().toString());
                debit.setMoneyAmount(0.0);
                debit.setAccountBalance(selectedCard.getBalance());
            }
            return debit;
        }
    }

