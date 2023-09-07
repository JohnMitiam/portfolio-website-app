import { HeaderContainers } from '@components/Containers/HeaderContainers';
import { TextAreaInput } from '@components/Inputs/TextAreaInput';
import { TextInput } from '@components/Inputs/TextInput';
import { ContactMeButtons } from '@components/PrimaryButtons/ContactMeButtons';

export const ContactMe = () => {
  const handleSendButton = () => {
    ('');
    console.log();
  };
  return (
    <>
      <HeaderContainers>{'<contact me>'}</HeaderContainers>
      <TextInput
        value=""
        // onChange={handleInputChange}
        name="_name"
        label="_name"
        type="text"
      />
      <TextInput
        name="_email"
        label="_email"
        type="email"
        value=""
        // onChange={handleInputChange}
      />
      <TextAreaInput
        label="_message"
        rows={2}
        value=""
        // onChange={handleInputChange}
      />
      <ContactMeButtons onClick={handleSendButton} type="submit">
        {'{send}'}
      </ContactMeButtons>
    </>
  );
};
