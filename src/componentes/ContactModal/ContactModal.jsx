import { useState } from 'react'
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  Button,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  FormHelperText,
  VStack,
  useToast,
  Text,
} from '@chakra-ui/react'
import emailjs from '@emailjs/browser'

const ContactModal = ({ isOpen, onClose }) => {
  const toast = useToast()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formValues, setFormValues] = useState({
    from_name: '',
    from_email: '',
    subject: '',
    message: '',
  })
  
  const [errors, setErrors] = useState({
    from_name: false,
    from_email: false,
    message: false,
  })

  const colores = {
    fondo: '#1e1e1e',
    bordeInput: '#3f3f3f',
    texto: '#d1d1d0',
    acento: '#a7734a',
    acentoHover: '#c59268',
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormValues((prev) => ({ ...prev, [name]: value }))
    // Limpiar error al escribir
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: false }))
    }
  }

  const validateEmail = (email) => {
    return /\S+@\S+\.\S+/.test(email)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    // Validaciones
    const newErrors = {
      from_name: !formValues.from_name.trim(),
      from_email: !formValues.from_email.trim() || !validateEmail(formValues.from_email),
      message: !formValues.message.trim(),
    }

    if (newErrors.from_name || newErrors.from_email || newErrors.message) {
      setErrors(newErrors)
      toast({
        title: 'Error de validación',
        description: 'Por favor, completa los campos requeridos correctamente.',
        status: 'warning',
        duration: 3000,
        isClosable: true,
        position: 'top',
      })
      return
    }

    setIsSubmitting(true)

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

    // Verificación de variables de entorno configuradas
    if (!serviceId || !templateId || !publicKey || serviceId === 'tu_service_id') {
      toast({
        title: 'Error de Configuración',
        description: 'Las credenciales de EmailJS no están configuradas correctamente en el archivo .env',
        status: 'error',
        duration: 5000,
        isClosable: true,
        position: 'top',
      })
      setIsSubmitting(false)
      return
    }

    try {
      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: formValues.from_name,
          from_email: formValues.from_email,
          subject: formValues.subject || 'Sin asunto',
          message: formValues.message,
        },
        publicKey
      )

      toast({
        title: 'Mensaje enviado',
        description: 'Tu mensaje ha sido enviado con éxito. ¡Gracias por contactarme!',
        status: 'success',
        duration: 5000,
        isClosable: true,
        position: 'top',
      })

      // Resetear formulario y cerrar modal
      setFormValues({
        from_name: '',
        from_email: '',
        subject: '',
        message: '',
      })
      onClose()
    } catch (error) {
      console.error('EmailJS Error:', error)
      toast({
        title: 'Error al enviar',
        description: 'Ocurrió un error al enviar el mensaje. Inténtalo de nuevo más tarde.',
        status: 'error',
        duration: 5000,
        isClosable: true,
        position: 'top',
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered size={{ base: 'xs', sm: 'md', md: 'lg' }}>
      <ModalOverlay bg="blackAlpha.700" backdropFilter="blur(4px)" />
      <ModalContent
        bg={colores.fondo}
        color={colores.texto}
        borderRadius="xl"
        border="1px solid"
        borderColor={colores.bordeInput}
        p={{ base: 2, md: 4 }}
      >
        <ModalHeader fontSize={{ base: 'xl', md: '2xl' }} fontWeight="bold" textAlign="center">
          Trabajemos Juntos
        </ModalHeader>
        <ModalCloseButton color={colores.texto} _hover={{ color: 'white' }} />
        <ModalBody pb={6}>
          <form onSubmit={handleSubmit}>
            <VStack spacing={4}>
              <FormControl isInvalid={errors.from_name} isRequired>
                <FormLabel fontWeight="medium">Nombre</FormLabel>
                <Input
                  placeholder="Tu nombre"
                  name="from_name"
                  value={formValues.from_name}
                  onChange={handleChange}
                  bg="whiteAlpha.50"
                  borderColor={colores.bordeInput}
                  _hover={{ borderColor: 'whiteAlpha.400' }}
                  _focus={{
                    borderColor: colores.acento,
                    boxShadow: `0 0 0 1px ${colores.acento}`,
                  }}
                />
              </FormControl>

              <FormControl isInvalid={errors.from_email} isRequired>
                <FormLabel fontWeight="medium">Email</FormLabel>
                <Input
                  type="email"
                  placeholder="tu-email@ejemplo.com"
                  name="from_email"
                  value={formValues.from_email}
                  onChange={handleChange}
                  bg="whiteAlpha.50"
                  borderColor={colores.bordeInput}
                  _hover={{ borderColor: 'whiteAlpha.400' }}
                  _focus={{
                    borderColor: colores.acento,
                    boxShadow: `0 0 0 1px ${colores.acento}`,
                  }}
                />
              </FormControl>

              <FormControl>
                <FormLabel fontWeight="medium">Tema / Asunto</FormLabel>
                <Input
                  placeholder="¿De qué trata tu mensaje?"
                  name="subject"
                  value={formValues.subject}
                  onChange={handleChange}
                  bg="whiteAlpha.50"
                  borderColor={colores.bordeInput}
                  _hover={{ borderColor: 'whiteAlpha.400' }}
                  _focus={{
                    borderColor: colores.acento,
                    boxShadow: `0 0 0 1px ${colores.acento}`,
                  }}
                />
              </FormControl>

              <FormControl isInvalid={errors.message} isRequired>
                <FormLabel fontWeight="medium">Mensaje</FormLabel>
                <Textarea
                  placeholder="Comienza a escribir tu mensaje..."
                  name="message"
                  value={formValues.message}
                  onChange={handleChange}
                  bg="whiteAlpha.50"
                  borderColor={colores.bordeInput}
                  _hover={{ borderColor: 'whiteAlpha.400' }}
                  _focus={{
                    borderColor: colores.acento,
                    boxShadow: `0 0 0 1px ${colores.acento}`,
                  }}
                  rows={5}
                  resize="none"
                />
                <FormHelperText color="whiteAlpha.600">
                  El mensaje se enviará directamente a mi correo personal.
                </FormHelperText>
              </FormControl>

              <Button
                type="submit"
                isLoading={isSubmitting}
                loadingText="Enviando..."
                bg={colores.acento}
                color="white"
                w="full"
                mt={4}
                _hover={{ bg: colores.acentoHover }}
                _active={{ bg: colores.acento }}
              >
                ENVIAR MENSAJE
              </Button>
            </VStack>
          </form>
        </ModalBody>
      </ModalContent>
    </Modal>
  )
}

export { ContactModal }
