from django.shortcuts import render, redirect
from .models import Account

# Create your views here.
def new_account(request):
    if request.method == "POST":
        account = Account(
        email=request.POST.get('email'),
        password=request.POST.get('password'),
        first_name=request.POST.get('first_name'),
        last_name=request.POST.get('last_name'),
        phone=request.POST.get('phone'),
        street=request.POST.get('street'),
        city=request.POST.get('city'),
        state=request.POST.get('state'),
        zipcode=request.POST.get('zip')
        )
        account.save()
        request.session['account_id'] = account.id
        return redirect('accounts:home')
    else:
        return render(request, 'accounts/new_account.html')

def login(request):
    if request.method == "POST":
        email = request.POST.get('email', '').strip()
        password = request.POST.get('password')

        # Determine which field was filled
        account = Account.objects.filter(email=email).first()
        if account and account.password == password:
            # If the password matches, log in the user
            request.session['account_id'] = account.id
            return redirect('accounts:home')
        else:
            return render(request, 'accounts/login.html', {'error': 'Email or password is incorrect.'})
    else:
        return render(request, 'accounts/login.html')
    

def home(request):
    if request.method == "POST":
        if "logout" in request.POST:
            request.session.flush()
            return redirect('welcome')
        elif "edit" in request.POST:
            return redirect('accounts:edit-account')
        elif "delete" in request.POST:
            account_id = request.POST.get('account_id')
            account = Account.objects.filter(id = account_id).first()
            account.delete()
            request.session.flush()
            return redirect('welcome')
        else:
            request.session.flush()
            return redirect('accounts:new-account')
    else:
        account = None
        account_id = request.session.get('account_id')
        account = Account.objects.filter(id=account_id).first()
        return render(request, 'accounts/home.html', {'account': account})
    
def edit_account(request):
    account_id = request.session.get('account_id')
    account = Account.objects.filter(id=account_id).first()
    if request.method == "POST":
        account.first_name = request.POST.get('first_name', account.first_name)
        account.last_name = request.POST.get('last_name', account.last_name)
        account.email = request.POST.get('email', account.email)
        account.phone = request.POST.get('phone', account.phone)
        account.street = request.POST.get('street', account.street)
        account.city = request.POST.get('city', account.city)
        account.state = request.POST.get('state', account.state)
        account.zipcode = request.POST.get('zip', account.zipcode)
        account.save()
        return redirect('accounts:home')
    else:
        # If GET, just render the edit form
        return render(request, 'accounts/edit_account.html', {'account': account})