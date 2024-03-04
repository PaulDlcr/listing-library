import React from 'react'
import {render, screen, fireEvent} from '@testing-library/react'
import App from '../app'

describe('Confirm component', () => {
  test('renders confirm page with correct choices', async () => {
    render(<App />)

    // 1 - l'utilisateur est sur la Home
    // 2 - Un titre "Welcome home" est dans le document
    expect(screen.getByText('Welcome home')).toBeInTheDocument()

    // 3 - Un lien "Fill out the form" est dans le document
    const formLink = screen.getByText('Fill out the form')
    expect(formLink).toBeInTheDocument()

    // 4 - l'utilisateur clique sur le lien
    fireEvent.click(formLink)

    // 5 - l'utilisateur est redirigé sur la page 1
    // 6 - Un titre "Page 1" est dans le document
    expect(await screen.findByText('Page 1')).toBeInTheDocument()

    // 7 - un lien "Go home" est dans le document
    const goHomeLink = screen.getByText('Go Home')
    expect(goHomeLink).toBeInTheDocument()

    // 8 - Un champ avec le label "Favorite food" est dans le document
    const favoriteFoodInput = screen.getByLabelText('Favorite Food')
    expect(favoriteFoodInput).toBeInTheDocument()

    // 9 - l'utilisateur rempli le champ avec "Les pâtes"
    fireEvent.change(favoriteFoodInput, {target: {value: 'Les pâtes'}})

    // 10 - un lien "Next" est dans le document
    const nextLink = screen.getByText('Next')
    expect(nextLink).toBeInTheDocument()

    // 11 - l'utilisateur clique sur le lien "Next"
    fireEvent.click(nextLink)

    // 12- l'utilisateur est redirigé sur la page 2
    // 13 - Un titre "Page 2" est dans le document
    expect(await screen.findByText('Page 2')).toBeInTheDocument()

    // 14 - un lien "Go back" est dans le document
    const goBackLink = screen.getByText('Go Back')
    expect(goBackLink).toBeInTheDocument()

    // 15 - Un champ avec le label "Favorite drink" est dans le document
    const favoriteDrinkInput = screen.getByLabelText('Favorite Drink')
    expect(favoriteDrinkInput).toBeInTheDocument()

    // 16 - l'utilisateur rempli le champ avec "Bière"
    fireEvent.change(favoriteDrinkInput, {target: {value: 'Bière'}})

    // 17 - un lien "Review" est dans document
    const reviewLink = screen.getByText('Review')
    expect(reviewLink).toBeInTheDocument()

    // 18 - l'utilisateur clique sur le lien "Review"
    fireEvent.click(reviewLink)

    // 19 - l'utilisateur est redirigé sur la page de confirmation
    // 20 - Un titre "Confirm" est dans le document
    const h2Title = await screen.findAllByText('Confirm')
    expect(h2Title[0]).toBeInTheDocument()

    // 21 - Un texte "Please confirm your choices" est dans le document
    expect(screen.getByText('Please confirm your choices')).toBeInTheDocument()

    // 22 - Un texte label "favorite food" a pour contenu "Les pâtes"
    expect(screen.getByLabelText('Favorite Food')).toHaveTextContent(
      'Les pâtes',
    )

    // 23 - Un texte label "favorite drink" a pour contenu "Bière"
    expect(screen.getByLabelText('Favorite Drink')).toHaveTextContent('Bière')

    // 24 - un lien "Go back" est dans le document
    const goBackLink2 = screen.getByText('Go Back')
    expect(goBackLink2).toBeInTheDocument()

    // 25 - un bouton "Confirm" est dans le document
    const confirmButton = screen.getByRole('button', {name: /confirm/i})
    expect(confirmButton).toBeInTheDocument()

    // 26 - l'utilisateur clique sur le bouton "Confirm"
    fireEvent.click(confirmButton)

    // 27 - l'utilisateur est redirigé sur la page de Félicitation
    // 28 - Un titre "Congrats.You did it." est dans le document
    expect(await screen.findByText('Congrats. You did it.')).toBeInTheDocument()

    // 29 - un lien "Go home" est dans le document
    const goHomeLink2 = screen.getByText('Go home')
    expect(goHomeLink2).toBeInTheDocument()

    // 30 - l'utilisateur clique sur le lien "Go Home"
    fireEvent.click(goHomeLink2)

    // 31 - l'utilisateur est redirigé sur la home
    // 32 - Un titre "Welcome home" est dans le document
    expect(await screen.findByText('Welcome home')).toBeInTheDocument()
  })
})
