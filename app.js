$cart = $('.cart')
$itemBtn = $('.btn')

$itemBtn.click( (e) => {
   e.preventDefault()
   $cart.addClass('cart-bounce')
   setTimeout(function() {
       $cart.removeClass('cart-bounce')
   }, 1500);
}
)
