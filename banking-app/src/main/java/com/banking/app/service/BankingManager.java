package com.banking.app.service;

import com.banking.app.domain.Card;
import com.banking.app.domain.Debit;
import com.banking.app.repository.CardRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;

import java.util.UUID;

@Service
public class BankingManager {

    @Autowired
    private CardRepository cardRepository;

    public Boolean verifyCard(@PathVariable String cardNumber, @PathVariable String pin) {

        Card card = cardRepository.findByCardNumber(cardNumber);
        if (card != null) {
            if (card.getPin().equals(pin))
                return true;
            else
                return false;
        } else return false;

    }

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
