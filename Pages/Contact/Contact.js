import React, { useState } from "react";
import { TextInput, Textarea, Button } from '@mantine/core';
import { IconAt } from '@tabler/icons';
import { useForm } from '@mantine/form';
import contactPic from "./contact.png";
import "./Contact.scss";


export function Contact() {
    const [showSendMessage, setShowSendMessage] = useState({ value:'' });

    const showSendedMessage = showSendMessage.value ? 'showSendMessage' : '';
    const hideFormMessage = showSendMessage.value ? 'hideForm' : '';

    function ContactForm() {

        const form = useForm({
            initialValues: { email: '', title: '', message: '' },
        
            validate: {
              
              email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Niepoprawny email'),
              title: (value) => (value.length < 2 ? 'Tytuł musi składać się z minimum 2 liter' : null),
              message: (value) => (value.length < 15 ? 'Treść musi składać się z minimum 15 liter' : null),
            },
          });

          function showAndHide() {
            setShowSendMessage({value: true});
          }
        return (
        <form onSubmit={form.onSubmit(() => showAndHide())} className="form-contact">
            <TextInput
            className="form-input-contact"
            label="Podaj swój email"
            icon={<IconAt />}
            placeholder="Twój email"
            radius="md"
            {...form.getInputProps('email')}
            />
            <TextInput
            className="form-input-contact"
            placeholder="Tytuł..."
            label="Podaj tytuł wiadomości"
            radius="md"
            {...form.getInputProps('title')}
            />
            <Textarea
            className="form-textarea-contact"
            placeholder="Treść wiadomości..."
            label="Podaj treść wiadomości"
            radius="md"
            {...form.getInputProps('message')}
            />
            <Button
                className="ButtonContact"
                type="submit"
                variant="light"
                radius="md"
                size="lg"
            >
            Wyślij
            </Button>
        </form>
        )
    }
   

    return (
        <div className="Contact-content--footer">
            <div className="Contact-content">
                <div className={`Contact-inputs ${hideFormMessage}`}>
                    <h2>Masz pytania? Napisz do mnie</h2>
                    <ContactForm />
                </div>
                <div className={`Constact-message-sent ${showSendedMessage}`}>
                    <h2>Wiadomość została wysłana!</h2>
                </div>
                <img className="Contact-infographic" src={contactPic} /> 
            </div>
            <footer><a href="https://www.freepik.com/author/pch-vector">All mages by pch.vector</a> on Freepik
            </footer>
        </div>
    )
}