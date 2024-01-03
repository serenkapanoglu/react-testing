 import { render, screen, fireEvent } from '@testing-library/react';
 import Todo from './index' 

 describe("Todo testleri", () => {
    let button, input;

    beforeEach(() => {
        render(<Todo />);

        button = screen.getByText("Add");
        input = screen.getByLabelText("Text");

    });

 it('Varsayilan olarak verilen 3 nesne render edilmeli', () => {
    const items = screen.getAllByText(/Item/i);

    expect(items.length).toEqual(3);
 });

 it('Input ve buton dokumanda bulunmali.',() => {
    expect(button).toBeInTheDocument();
    expect(input).toBeInTheDocument();
 });

 it('Inputa string girilip butona basilinca listeye eklenmeli', () => {
    const name = 'Mehmet';
    // Giris yapildiginda
    fireEvent.change(input,{target:{value:name}});
    // Ekleme islemi icin butona basiliyoruz.
    fireEvent.click(button);
    // Eklenecek deger var mualfiyetliyoruz.
    expect(screen.getByText(name)).toBeInTheDocument();
 });




});